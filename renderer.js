let todos = []
let pinned = true
let isUrgent = false

const todoInput        = document.getElementById('todoInput')
const todoList         = document.getElementById('todoList')
const statusText       = document.getElementById('statusText')
const clearDoneBtn     = document.getElementById('clearDone')
const btnPin           = document.getElementById('btnPin')
const btnMin           = document.getElementById('btnMin')
const btnClose         = document.getElementById('btnClose')
const btnBubble        = document.getElementById('btnBubble')
const optUrgent        = document.getElementById('optUrgent')
const deadlineInput    = document.getElementById('deadlineInput')
const optDeadlineLabel = document.getElementById('optDeadlineLabel')

function todayStr() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' })
}

async function init() {
  todos = await window.api.loadTodos()
  render()
}

function render() {
  const today = todayStr()

  // 只显示：未完成 + 当日完成
  const visible = todos.filter(t => !t.done || t.completedAt === today)

  // 排序：未完成在前（紧急 > 今日截止 > 其他），完成在后
  visible.sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1
    if (!a.done) {
      if (a.urgent !== b.urgent) return a.urgent ? -1 : 1
      const aToday = a.deadline === today
      const bToday = b.deadline === today
      if (aToday !== bToday) return aToday ? -1 : 1
    }
    return 0
  })

  if (visible.length === 0) {
    todoList.innerHTML = `<div class="empty-hint">暂无任务<br>在上方输入，按 Enter 添加</div>`
    statusText.textContent = ''
    return
  }

  let html = ''
  let hasDoneDivider = false

  visible.forEach(t => {
    if (t.done && !hasDoneDivider) {
      html += `<li class="section-divider">今日已完成</li>`
      hasDoneDivider = true
    }

    const isDeadlineToday = !t.done && t.deadline === today
    const isOverdue = !t.done && t.deadline && t.deadline < today

    let cls = 'todo-item'
    if (t.done) cls += ' done'
    if (t.urgent && !t.done) cls += ' urgent'
    if (isDeadlineToday) cls += ' deadline-today'
    if (isOverdue) cls += ' overdue'

    const urgentBadge = (t.urgent && !t.done)
      ? `<span class="urgent-badge">急</span>` : ''

    let deadlineBadge = ''
    if (t.deadline && !t.done) {
      const badgeCls = isDeadlineToday ? 'today' : isOverdue ? 'overdue' : ''
      deadlineBadge = `<span class="deadline-badge ${badgeCls}">${formatDate(t.deadline, today)}</span>`
    }

    html += `
      <li class="${cls}" data-id="${t.id}">
        <input type="checkbox" ${t.done ? 'checked' : ''} />
        <div class="todo-content">
          <div class="todo-main">
            <span class="todo-text">${escapeHtml(t.text)}</span>${urgentBadge}${deadlineBadge}
          </div>
        </div>
        <button class="todo-delete" title="删除">✕</button>
      </li>`
  })

  todoList.innerHTML = html

  todoList.querySelectorAll('.todo-item').forEach(item => {
    const id = item.dataset.id
    item.querySelector('input[type="checkbox"]').addEventListener('change', () => toggle(id))
    item.querySelector('.todo-delete').addEventListener('click', () => remove(id))
  })

  const activeCount = todos.filter(t => !t.done).length
  statusText.textContent = activeCount > 0 ? `${activeCount} 项未完成` : '全部完成 ✓'
}

function formatDate(dateStr, today) {
  const [, m, d] = dateStr.split('-')
  const dateLabel = `${parseInt(m)}月${parseInt(d)}日`
  if (dateStr === today) return `${dateLabel} · 今天截止`
  const diff = Math.round((new Date(dateStr + 'T00:00:00') - new Date(today + 'T00:00:00')) / 86400000)
  if (diff < 0) return `${dateLabel} · 已逾期${Math.abs(diff)}天`
  return `${dateLabel} · ${diff}天后`
}

function addTodo(text) {
  text = text.trim()
  if (!text) return
  todos.unshift({
    id: Date.now().toString(),
    text,
    done: false,
    urgent: isUrgent,
    deadline: deadlineInput.value || null,
    completedAt: null
  })
  isUrgent = false
  optUrgent.classList.remove('active')
  deadlineInput.value = ''
  optDeadlineLabel.classList.remove('active')
  save()
  render()
}

function toggle(id) {
  const t = todos.find(t => t.id === id)
  if (t) {
    t.done = !t.done
    t.completedAt = t.done ? todayStr() : null
  }
  save()
  render()
}

function remove(id) {
  todos = todos.filter(t => t.id !== id)
  save()
  render()
}

function save() {
  window.api.saveTodos(todos)
}

// ── 事件绑定 ─────────────────────────────────
todoInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    addTodo(todoInput.value)
    todoInput.value = ''
  }
})

optUrgent.addEventListener('click', () => {
  isUrgent = !isUrgent
  optUrgent.classList.toggle('active', isUrgent)
})

deadlineInput.addEventListener('change', () => {
  optDeadlineLabel.classList.toggle('active', !!deadlineInput.value)
})

btnMin.addEventListener('click', () => window.api.minimize())
btnClose.addEventListener('click', () => window.api.close())
btnBubble.addEventListener('click', () => window.api.minimizeToBubble())
btnPin.addEventListener('click', () => {
  pinned = !pinned
  btnPin.classList.toggle('active', pinned)
  btnPin.textContent = pinned ? '▲' : '△'
  window.api.setPin(pinned)
})

clearDoneBtn.addEventListener('click', () => {
  todos = todos.filter(t => !t.done)
  save()
  render()
})

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}


init()

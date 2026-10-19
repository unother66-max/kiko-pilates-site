import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ProgramDropdown({ items, active }) {
  const [open, setOpen] = useState(false)
  const container = useRef(null)
  const trigger = useRef(null)
  const links = useRef(null)
  const reason = useRef(null)
  const pendingFocus = useRef(null)

  function close() {
    reason.current = null
    pendingFocus.current = null
    setOpen(false)
  }

  function focusLink(edge) {
    const elements = links.current?.querySelectorAll('a')
    elements?.[edge === 'last' ? elements.length - 1 : 0]?.focus()
  }

  useEffect(() => {
    if (open && pendingFocus.current) {
      focusLink(pendingFocus.current)
      pendingFocus.current = null
    }
  }, [open])
  useEffect(() => {
    if (!open) return
    const outside = event => { if (!container.current?.contains(event.target)) close() }
    const escape = event => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      const restoreFocus = container.current?.contains(document.activeElement)
      close()
      if (restoreFocus) trigger.current?.focus()
    }
    const resize = () => { if (window.innerWidth < 1200) close() }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    window.addEventListener('resize', resize)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
      window.removeEventListener('resize', resize)
    }
  }, [open])

  function handleTriggerKey(event) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
    event.preventDefault()
    const edge = event.key === 'ArrowUp' ? 'last' : 'first'
    reason.current = 'keyboard'
    if (open) focusLink(edge)
    else { pendingFocus.current = edge; setOpen(true) }
  }

  return (
    <div
      ref={container}
      className="desktop-program"
      onPointerEnter={event => {
        if (event.pointerType === 'mouse' && !open) { reason.current = 'hover'; setOpen(true) }
      }}
      onPointerLeave={() => {
        if (reason.current === 'hover' && !container.current?.contains(document.activeElement)) close()
      }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) close() }}
    >
      <button
        ref={trigger}
        type="button"
        className={`program-trigger${active ? ' is-active' : ''}`}
        aria-expanded={open}
        aria-controls="desktop-program-links"
        onKeyDown={handleTriggerKey}
        onClick={() => {
          if (open && reason.current !== 'hover') close()
          else { reason.current = 'click'; setOpen(true) }
        }}
      >PROGRAM <span className="program-indicator" aria-hidden="true">{open ? '−' : '+'}</span></button>
      <ul ref={links} id="desktop-program-links" className="program-dropdown" hidden={!open}>
        {items.map(([name, href]) => <li key={name}><NavLink to={href} end onClick={close}>{name}</NavLink></li>)}
      </ul>
    </div>
  )
}

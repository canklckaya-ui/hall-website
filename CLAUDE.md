# Project Guidelines

## Auto-Active Skills

All skills below activate automatically on every task. No confirmation needed.

### Coding Quality (Karpathy Guidelines)
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them.
- If simpler approach exists, say so. Push back when warranted.
- No features beyond what was asked. No abstractions for single-use code.
- No speculative "flexibility" or error handling for impossible scenarios.
- If 200 lines could be 50, rewrite it.
- Don't "improve" adjacent code. Match existing style.
- Every changed line traces directly to user's request.
- Transform tasks into verifiable goals with verify steps.

### Development Workflow (Superpowers)
- **Plan first**: Use writing-plans skill before complex tasks. Brief plan with verify steps.
- **Execute plans**: Follow executing-plans skill. Step-by-step, verify each.
- **TDD**: Write failing test first, then make it pass. Use test-driven-development skill.
- **Systematic debugging**: Root cause tracing, no guessing. Use systematic-debugging skill.
- **Verification before completion**: Always verify changes work before reporting done.
- **Git worktrees**: Use for parallel isolated work when needed.
- **Subagent-driven development**: Dispatch parallel agents for independent tasks.
- **Parallel agents**: Fan out work when tasks are independent.
- **Brainstorming**: Use visual companion for design discussions.
- **Code review**: Auto-request review on finishing branches. Apply receiving-code-review skill on feedback.
- **Branch finishing**: Clean up, verify, and prepare before merge.

### UI/UX (Pro Max)
- Apply ui-ux-pro-max skill on all frontend work. Follow UX guidelines, color theory, typography rules.
- Use ui-styling skill for Tailwind, shadcn, responsive design.
- Use design-system skill for token architecture, component specs.
- Use design skill for logos, icons, CIP, social media assets.
- Use banner-design skill for banner/header creation.
- Use brand skill for brand identity consistency.
- Use slides skill for presentation creation.

### Skill Writing
- When creating new skills, follow writing-skills best practices and anthropic guidelines.

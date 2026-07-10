# Project Guidelines

## Karpathy Guidelines (Always Active)

Behavioral guidelines to reduce common LLM coding mistakes.

### 1. Think Before Coding
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them.
- If simpler approach exists, say so. Push back when warranted.
- If something unclear, stop and ask.

### 2. Simplicity First
- No features beyond what was asked.
- No abstractions for single-use code.
- No speculative "flexibility" or "configurability".
- No error handling for impossible scenarios.
- If 200 lines could be 50, rewrite it.

### 3. Surgical Changes
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style.
- Remove only imports/variables YOUR changes made unused.
- Every changed line should trace directly to user's request.

### 4. Goal-Driven Execution
- Transform tasks into verifiable goals.
- "Add validation" = write tests for invalid inputs, then make them pass.
- "Fix the bug" = write reproducing test, then make it pass.
- For multi-step tasks, state brief plan with verify steps.

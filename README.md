## Setup
- Run `npm install`

### Reproduce the compilation error
- Run `npm run dev`
- Open a second terminal and run `npm run dev-react`
- Edit `packages/universal-components/src/components/badge/badge.tsx`:
  - Add `<span>test</span>` anywhere within the contents of the `<Host>` element.  
  - Observe as the console emits an error.


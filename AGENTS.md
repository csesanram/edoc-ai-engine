# Agent Guidelines for eDoc AI Engine

## Commands
- **Build**: `npm run build`
- **Dev server**: `npm run dev`
- **Preview**: `npm run preview`
- **Install**: `npm install`
- **No test framework configured** - add testing framework if needed

## Code Style
- **TypeScript**: Strict mode enabled, explicit types required
- **Components**: Functional components with React.FC, PascalCase naming
- **Imports**: React imported for JSX namespace, path aliases: `@/*`, `components/*`
- **Styling**: Tailwind CSS classes, consistent color scheme (slate/teal)
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Error handling**: Use try/catch blocks, validate inputs
- **State**: useState hooks, explicit typing for state variables
- **Events**: Typed event handlers (React.FormEvent, React.ChangeEvent)

## Project Structure
- Components in `components/` directory
- Types in `types.ts`
- Constants in `constants.tsx`
- Default exports for components
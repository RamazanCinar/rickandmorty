# Rick & Morty Explorer

## Setyp Instructions
1. **Clone the repo**  
   ```bash
   git clone git@github.com:RamazanCinar/rickandmorty.git && cd rickandmorty
   
2. Install dependecies
   ```bash
   npm install

3. Run development server
   ```bash
   npm run dev

4. Open http://localhost:3000


## Asssumptions & Decisions
- Next.js App Router is used for a single-page search + pagination + drawer UI.
- Hero UI provides styling/components (Drawer, Button, Input).
- Apollo Client is initialized in layout.tsx for global GraphQL queries.
- No extra environment variables required (public API).
- Responsive design with Tailwind CSS.

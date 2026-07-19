# Initialization Commands

```
# 1. Initialize git
git init

# 2. Install all workspace dependencies (links @mycellium/types automatically)
pnpm install

# 3. Verify workspace linking
pnpm ls --filter @mycellium/mycelium-pwa --depth 0
pnpm ls --filter @mycellium/spora-server --depth 0

# 4. Run the PWA dev server
pnpm --filter @mycellium/mycelium-pwa dev

# 5. Build everything via Turborepo
pnpm build

# 6. Lint everything
pnpm lint

# 7. Type-check everything
pnpm type-check
```

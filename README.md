This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3009](http://localhost:3009) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Rule Naming

1. **Use camelCase**: For variables, functions, and names of props or state variables, such as:
- `userName`
- `isLoggedIn`
- `handleClick`

2. **Use kebab-case or snake_case**: For folder names, such as:
- `user-profile` (kebab-case)
- `user_profile` (snake_case)

3. **Use UPPER_SNAKE_CASE**: The names of configuration values ​​or constants should follow the UPPER_SNAKE_CASE pattern. To show that this is a constant and should not be changed, such as:
- `DATABASE_CONFIG`
- `API_ENDPOINT`
- `MAX_RETRY_ATTEMPTS`

4. **Rule Organizing components folders**: **Atomic Design Structure**
Atomic Design is a design concept that divides components based on their complexity and usage. They are divided into five levels: 
    1. Atoms
    2. Molecules
    3. Organisms
    4. Templates
    5. Pages.

5. **Rule Naming configuration values**: **Configuration naming rules**
**Use UPPER_SNAKE_CASE**: The name of a configuration value or constant should be UPPER_SNAKE_CASE to show that it is a constant and should not be changed, such as:

- `DATABASE_CONFIG`
- `API_ENDPOINT`
- `MAX_RETRY_ATTEMPTS`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


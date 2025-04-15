# 📘 Next.js Course – Introduction

---

## ❓ What is Next.js?

**`Answer:`** Next.js is a open-source react framework that makes it easier to built fast and scalable web applications. It provides a lot of built-in features like `SSR`, `SSG`, `API Routes`, and `automatic code splitting` all of which help with `performance` and `SEO`.


---

## ❓ Problem with React.js.

### **Answer:**

React is a great library for building user interfaces but there are few things it does not handle out of the box.

![Alt text](images/react.js.png)
>1. **`No Routing:`** React.js does not come with a *`built-in routing`* solution, this means in react we have to rely on third party libraries like `react-router` or `tanstack router`.

>2. **`No Compiler:`** React needs tools like `babel` or `webpack` to transform code before it can run in browser that adds extra complexity, however now react js also has its own compiler but previously it does not use to have. 

>3. **`No SEO:`** SEO in react is challenging, react mostly render pages on ***client side*** and search engine might have trouble indexing content properly.

>4. **`No SSR:`** React does not handle SSR by default which means user might experience slower load time since everything needs to be load it and rendered on client side  means the browser downloads a blank HTML, then loads JS, then renders UI.


>4. **`No SSG:`** React also does not support SSG. If you want to pre-render your page on built-time, You will need to use a framework or static site generator that wraps around React, such as:
>>>1. Next.js <br>
>>>2. Gatsby.js
>>>3. VitePress / Astro / Remix

>4. **`No FullStack:`** React is frontend library it does not include fullstack capability like handling backend logic or database connection or server side operation.

>5. **`No Structure`** React does not impose any `folder-structure` or `pattern` that leads to disorganization in bigger project.

>6. **`No API Integration:`** React does not come up with built-in api integration, so if you need to make an API call then you have to manually set up by using `Axios` or `fetch`.

---

## ✅ Features of Next.js:
Next.js solve all these problems of React.js with some additional features such as:

![Alt text](images/next.js.png)

>1.**`Hot Reloading:`** Next.js give great development experience with fast automatic update. This allows app automatically refreshes in real-time whenever you save a file (code, style, etc.) — without losing the component state.

 >2.**`Compiler:`** Next.js has its own compiler so it does not need to depend or set-up `babel` or `web-pack` manually.

>3.**`SEO Optimization:`** It offers built in SEO Optimization with `SSR` and `SSG` and search engine can easily crawl and index your pages.

>4.**`SSR:`** `SSR` is a game-changer for performance and SEO. Next.js let's you render pages on the server side before sending them to client side.

>5.**`SSG:`** SSG allows you to pre-render your pages at build time or even faster load speed.

>6.**`Full Stack:`** Next.js is also a fullstack ready, you can create your API routes and integrate database and handle backend logic all with your same project.

>7.**`Routing:`** Next.js  also come with built-in routing no need for extra library you can just create your app in application and Next.js will take care of the rest.

>8.**`Performance:`** Next.js  also priortize performance, features like `code-splitting`, `optimize imag handling`, and `static side generation` ensures that your app runs superfast.

---





![Alt text](images/syllabus.png)



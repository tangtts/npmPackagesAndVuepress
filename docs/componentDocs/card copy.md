
# card 组件

```ts {1,6-7}
interface name {
  age:number,
  name:string
}

interface name {
  age:number,
  name:string
}

interface name {
  age:number,
  name:string
}
```








<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>
```


::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::


::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::


  
:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::
<ClientOnly>
 <base-card headerText="你好" footerText="底部" bodyImg="../assets/img/logo.png"></base-card>
</ClientOnly>
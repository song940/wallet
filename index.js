import { ready } from 'https://lsong.org/scripts/dom.js';
import { rand, randomId } from 'https://lsong.org/scripts/math.js';
import { numberWithCommas } from 'https://lsong.org/scripts/number.js';
import { sample } from 'https://lsong.org/scripts/array.js';
import { h, render, useState, useEffect, Panel, List } from 'https://lsong.org/scripts/react/index.js';

const Balance = ({ amount }) => {
  return h('div', {}, [
    h('h2', null, "Balance"),
    h('div', null, "Current amount due"),
    h('b', { className: "balance-amount" }, '$' + numberWithCommas(amount)),
    h('button', {}, "Transfer In"),
    h('button', {}, "Transfer Out"),
  ])
};

const names = [
  "coffee",
  "cheese",
  "orange",
  "apple",
  "phone",
  "other",
];

const bill = () => {
  return {
    title: sample(["red", "blue", "dark", "green"], 1) + " " + sample(names, 1),
    amount: (Math.random() * 100).toFixed(2),
  }
};

const bills = [
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
  bill(),
];

const BillItem = ({ bill }) => {
  return h('li', { className: "list-item bill-item" }, [
    h('b', {}, bill.title),
    h('span', {}, bill.amount)
  ])
};

const BillList = () => {
  return h(List, {}, [
    bills.map((bill, i) => h(BillItem, { bill }))
  ])
};

const App = () => {
  const [] = useState();
  useEffect(() => {
    console.log('App is ready');
  }, []);
  const amount = rand(1e9);
  return [
    h(Balance, { amount }),
    h(Panel, { title: "Bill List" }, [
      h(BillList)
    ])
  ]
}

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});

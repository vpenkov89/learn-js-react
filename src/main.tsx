import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/mock";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="main">
    <div>
      <h2>{restaurants[0].name}</h2>
      <h3>Menu</h3>
      <ul>
        <li>
          <div>
            {restaurants[0].menu[0].name} - ${restaurants[0].menu[0].price}
          </div>
          <p>Ingridients: {restaurants[0].menu[0].ingredients.join(", ")}</p>
        </li>
        <li>
          <div>
            {restaurants[0].menu[1].name} - ${restaurants[0].menu[1].price}
          </div>
          <p>Ingridients: {restaurants[0].menu[1].ingredients.join(", ")}</p>
        </li>
        <li>
          <div>
            {restaurants[0].menu[2].name} - ${restaurants[0].menu[2].price}
          </div>
          <p>Ingridients: {restaurants[0].menu[2].ingredients.join(", ")}</p>
        </li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li>
          <div>
            ★{restaurants[0].reviews[0].rating} {restaurants[0].reviews[0].user}
          </div>
          <p>{restaurants[0].reviews[0].text}</p>
        </li>
        <li>
          <div>
            ★{restaurants[0].reviews[1].rating} {restaurants[0].reviews[1].user}
          </div>
          <p>{restaurants[0].reviews[1].text}</p>
        </li>
      </ul>
      <hr />
    </div>

    <div>
      <h2>{restaurants[1].name}</h2>
      <h3>Menu</h3>
      <ul>
        <li>
          <div>
            {restaurants[1].menu[0].name} - ${restaurants[1].menu[0].price}
          </div>
          <p>Ingridients: {restaurants[1].menu[0].ingredients.join(", ")}</p>
        </li>
        <li>
          <div>
            {restaurants[1].menu[1].name} - ${restaurants[1].menu[1].price}
          </div>
          <p>Ingridients: {restaurants[1].menu[1].ingredients.join(", ")}</p>
        </li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li>
          <div>
            ★{restaurants[1].reviews[0].rating} {restaurants[1].reviews[0].user}
          </div>
          <p>{restaurants[1].reviews[0].text}</p>
        </li>
        <li>
          <div>
            ★{restaurants[1].reviews[1].rating} {restaurants[1].reviews[1].user}
          </div>
          <p>{restaurants[1].reviews[1].text}</p>
        </li>
        <li>
          <div>
            ★{restaurants[1].reviews[2].rating} {restaurants[1].reviews[2].user}
          </div>
          <p>{restaurants[1].reviews[2].text}</p>
        </li>
      </ul>
      <hr />
    </div>

    <div>
      <h2>{restaurants[2].name}</h2>
      <h3>Menu</h3>
      <ul>
        <li>
          <div>
            {restaurants[2].menu[0].name} - ${restaurants[2].menu[0].price}
          </div>
          <p>Ingridients: {restaurants[2].menu[0].ingredients.join(", ")}</p>
        </li>
        <li>
          <div>
            {restaurants[2].menu[1].name} - ${restaurants[2].menu[1].price}
          </div>
          <p>Ingridients: {restaurants[1].menu[1].ingredients.join(", ")}</p>
        </li>
        <li>
          <div>
            {restaurants[2].menu[2].name} - ${restaurants[2].menu[2].price}
          </div>
          <p>Ingridients: {restaurants[2].menu[2].ingredients.join(", ")}</p>
        </li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li>
          <div>
            ★{restaurants[2].reviews[0].rating} {restaurants[2].reviews[0].user}
          </div>
          <p>{restaurants[2].reviews[0].text}</p>
        </li>
      </ul>
      <hr />
    </div>

    <div>
      <h2>{restaurants[3].name}</h2>
      <h3>Menu</h3>
      <ul>
        <li>
          <div>
            {restaurants[3].menu[0].name} - ${restaurants[3].menu[0].price}
          </div>
          <p>Ingridients: {restaurants[0].menu[0].ingredients.join(", ")}</p>
        </li>
        <li>
          <div>
            {restaurants[3].menu[1].name} - ${restaurants[3].menu[1].price}
          </div>
          <p>Ingridients: {restaurants[3].menu[1].ingredients.join(", ")}</p>
        </li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li>
          <div>
            ★{restaurants[3].reviews[0].rating} {restaurants[3].reviews[0].user}
          </div>
          <p>{restaurants[0].reviews[0].text}</p>
        </li>
        <li>
          <div>
            ★{restaurants[3].reviews[1].rating} {restaurants[3].reviews[1].user}
          </div>
          <p>{restaurants[3].reviews[1].text}</p>
        </li>
      </ul>
    </div>
  </div>
);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   React.createElement("div", {
//     className: "main",
//     children: [
//       React.createElement("div", {
//         children: [
//           React.createElement("h2", {
//             children: restaurants[0].name,
//           }),
//           React.createElement("h3", {
//             children: "Menu",
//           }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[0].menu[0].name} - $${restaurants[0].menu[0].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[0].menu[0].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[0].menu[1].name} - $${restaurants[0].menu[1].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[0].menu[1].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[0].menu[2].name} - $${restaurants[0].menu[2].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[0].menu[2].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//             ],
//           }),
//           React.createElement("h3", {
//             children: "Reviews",
//           }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `★${restaurants[0].reviews[0].rating} ${restaurants[0].reviews[0].user}`,
//                   }),
//                   React.createElement("p", {
//                     children: restaurants[0].reviews[0].text,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `★${restaurants[0].reviews[1].rating} ${restaurants[0].reviews[1].user}`,
//                   }),
//                   React.createElement("p", {
//                     children: restaurants[0].reviews[1].text,
//                   }),
//                 ],
//               }),
//             ],
//           }),
//           React.createElement("hr"),
//         ],
//       }),
//       React.createElement("div", {
//         children: [
//           React.createElement("h2", {
//             children: restaurants[1].name,
//           }),
//           React.createElement("h3", {
//             children: "Menu",
//           }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[1].menu[0].name} - $${restaurants[1].menu[0].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[1].menu[0].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[1].menu[1].name} - $${restaurants[1].menu[1].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[1].menu[1].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//             ],
//           }),
//           React.createElement("h3", {
//             children: "Reviews",
//           }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `★${restaurants[1].reviews[0].rating} $${restaurants[1].reviews[0].user}`,
//                   }),
//                   React.createElement("p", {
//                     children: restaurants[1].reviews[0].text,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `★${restaurants[1].reviews[1].rating} ${restaurants[1].reviews[1].user}`,
//                   }),
//                   React.createElement("p", {
//                     children: restaurants[1].reviews[1].text,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `★${restaurants[1].reviews[2].rating} ${restaurants[1].reviews[2].user}`,
//                   }),
//                   React.createElement("p", {
//                     children: restaurants[1].reviews[2].text,
//                   }),
//                 ],
//               }),
//             ],
//           }),
//           React.createElement("hr"),
//         ],
//       }),
//       React.createElement("div", {
//         children: [
//           React.createElement("h2", {
//             children: restaurants[2].name,
//           }),
//           React.createElement("h3", {
//             children: "Menu",
//           }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[2].menu[0].name} - $${restaurants[2].menu[0].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[2].menu[0].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[2].menu[1].name} - $${restaurants[2].menu[1].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[2].menu[1].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[2].menu[2].name} - $${restaurants[2].menu[2].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[2].menu[2].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//             ],
//           }),
//           React.createElement("h3", {
//             children: "Reviews",
//           }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `★${restaurants[2].reviews[0].rating} ${restaurants[2].reviews[0].user}`,
//                   }),
//                   React.createElement("p", {
//                     children: restaurants[2].reviews[0].text,
//                   }),
//                 ],
//               }),
//             ],
//           }),
//           React.createElement("hr"),
//         ],
//       }),
//       React.createElement("div", {
//         children: [
//           React.createElement("h2", {
//             children: restaurants[3].name,
//           }),
//           React.createElement("h3", {
//             children: "Menu",
//           }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[3].menu[0].name} - $${restaurants[3].menu[0].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[3].menu[0].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `${restaurants[3].menu[1].name} - $${restaurants[3].menu[1].price}`,
//                   }),
//                   React.createElement("p", {
//                     children: `Ingridients: ${restaurants[3].menu[1].ingredients.join(
//                       ", "
//                     )}`,
//                   }),
//                 ],
//               }),
//             ],
//           }),
//           React.createElement("h3", {
//             children: "Reviews",
//           }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `★${restaurants[3].reviews[0].rating} ${restaurants[3].reviews[0].user}`,
//                   }),
//                   React.createElement("p", {
//                     children: restaurants[3].reviews[0].text,
//                   }),
//                 ],
//               }),
//               React.createElement("li", {
//                 children: [
//                   React.createElement("div", {
//                     children: `★${restaurants[3].reviews[1].rating} ${restaurants[3].reviews[1].user}`,
//                   }),
//                   React.createElement("p", {
//                     children: restaurants[3].reviews[1].text,
//                   }),
//                 ],
//               }),
//             ],
//           }),
//         ],
//       }),
//     ],
//   })
// );

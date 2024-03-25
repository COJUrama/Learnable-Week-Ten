/* eslint-disable react/prop-types */

function Item({
  head,
  rank,
  name,
  weekOne,
  weekTwo,
  weekThree,
  weekFour,
  weekFive,
  total,
}) {
  return (
    <li className="historycard__item" data-head={head}>
      <p>{rank}</p>
      <p>{name}</p>
      <p>{weekOne}</p>
      <p>{weekTwo}</p>
      <p>{weekThree}</p>
      <p>{weekFour}</p>
      <p>{weekFive}</p>
      <p>
        {total ?? (weekOne + weekTwo + weekThree + weekFour + weekFive) / 5}
      </p>
    </li>
  );
}

export default Item;

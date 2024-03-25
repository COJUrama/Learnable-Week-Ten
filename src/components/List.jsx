/* eslint-disable react/prop-types */
import './List.css';
import Item from './Item';

const dummy = [
  {
    name: 'Benjamin Sunusi',
    ranking: 1,
    scores: [9, 8, 9, 10, 10],
  },
  {
    name: 'Ojo Abraham',
    ranking: 2,
    scores: [9, 8, 8, 9, 8],
  },
  {
    name: 'Chioma Agwu',
    ranking: 3,
    scores: [10, 8, 9, 6, 5],
  },
  {
    name: 'Ojo Onwe',
    ranking: 4,
    scores: [8, 8, 8, 6, 5],
  },
  {
    name: 'Theresa Odo',
    ranking: 5,
    scores: [5, 8, 7, 6, 5],
  },
  {
    name: 'Aisha Tanimu',
    ranking: 6,
    scores: [5, 5, 8, 1, 5],
  },
  {
    name: 'Stella Oladimeji',
    ranking: 7,
    scores: [0, 8, 2, 4, 5],
  },
  {
    name: 'Benjamin Sadi',
    ranking: 8,
    scores: [3, 1, 2, 6, 5],
  },
  {
    name: 'Faith Mahmud',
    ranking: 9,
    scores: [0, 2, 1, 6, 1],
  },
  {
    name: 'Victoria Ayodele',
    ranking: 10,
    scores: [0, 3, 0, 0, 1],
  },
];

function List({ filter }) {
  return (
    <div className="historycard">
      <ul className="historycard__list">
        <Item
          key={Math.random()}
          rank="Rank"
          name="Name"
          weekOne="Week One"
          weekTwo="Week Two"
          weekThree="Week Three"
          weekFour="Week Four"
          weekFive="Week Five"
          total="Total"
          head={true}
        />
        {dummy
          .filter((data) =>
            data.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((data) => (
            <Item
              key={Math.random()}
              name={data.name}
              rank={data.ranking}
              weekOne={data.scores[0]}
              weekTwo={data.scores[1]}
              weekThree={data.scores[2]}
              weekFour={data.scores[3]}
              weekFive={data.scores[4]}
            />
          ))}
      </ul>
    </div>
  );
}

export default List;

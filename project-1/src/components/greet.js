import React from "react";

const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Hello {name} aka {heroName}
      </h1>
    </div>
  );
};

export default Greet;

// import React from "react";

// const Greet = (props) => {
//   return (
//     <div>
//       <h1>
//         Hello {props.name} aka {props.heroName}
//       </h1>
//     </div>
//   );
// };

// export default Greet;

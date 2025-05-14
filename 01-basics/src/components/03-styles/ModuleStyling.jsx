// module.css must be imported with a NAME:
import moduleStyles from "./module-styling.module.css";

export default function ModuleStyling() {
  return (
    <div className={moduleStyles.container}>
      <h2 className={moduleStyles.header}>MODULE STYLING</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam
        veniam, dicta beatae rem itaque magnam consequuntur voluptate cupiditate
        cum, minus deserunt quas possimus nisi voluptatem assumenda, ratione
        officiis quae.
      </p>
      <p className={moduleStyles.italic}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam
        veniam, dicta beatae rem itaque magnam consequuntur voluptate cupiditate
        cum, minus deserunt quas possimus nisi voluptatem assumenda, ratione
        officiis quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam
        veniam, dicta beatae rem itaque magnam consequuntur voluptate cupiditate
        cum, minus deserunt quas possimus nisi voluptatem assumenda, ratione
        officiis quae.
      </p>
    </div>
  );
}

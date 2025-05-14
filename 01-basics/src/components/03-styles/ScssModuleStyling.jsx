import scssModuleStyles from "./scss-module-styling.module.scss";

export default function ScssModuleStyling() {
  return (
    <div className={scssModuleStyles.container}>
      <h2>SCSS MODULE STYLING</h2>
      <p className={scssModuleStyles.article1}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut omnis natus
        blanditiis! Animi doloribus magni, eveniet beatae obcaecati fugiat, sunt
        suscipit odio, quo hic numquam doloremque quis in modi. Dolores.
      </p>
      <p className={scssModuleStyles.article2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut omnis natus
        blanditiis! Animi doloribus magni, eveniet beatae obcaecati fugiat, sunt
        suscipit odio, quo hic numquam doloremque quis in modi. Dolores.
      </p>
      <p className={scssModuleStyles.article3}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut omnis natus
        blanditiis! Animi doloribus magni, eveniet beatae obcaecati fugiat, sunt
        suscipit odio, quo hic numquam doloremque quis in modi. Dolores.
      </p>
    </div>
  );
}

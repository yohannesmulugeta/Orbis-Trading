type ProductListProps = {
  title: string;
  items: string[];
  index?: string;
};

export function ProductList({ title, items, index }: ProductListProps) {
  return (
    <article className="product-list">
      {index ? <span className="product-list__index">{index}</span> : null}
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span aria-hidden="true">↗</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

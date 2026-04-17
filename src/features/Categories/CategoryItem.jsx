import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/getImageUrl';

export default function CategoryItem({ category }) {
  return (
    <Link to={`/categories/${category.id}`} className="space-y-4">
      <img
        src={getImageUrl(category.image)}
        alt={category.title}
        className="aspect-315/350 w-full rounded-xl object-cover"
      />
      <h5 className="text-center">{category.title}</h5>
    </Link>
  );
}

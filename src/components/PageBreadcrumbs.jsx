import { Link } from 'react-router-dom';

export default function PageBreadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumbs">
      <ol className="flex flex-wrap items-center">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center font-medium">
            {item.to ? (
              <Link
                to={item.to}
                className="inline-flex min-h-10 items-center rounded-sm border border-gray-200 px-4 text-lg text-gray-400 hover:text-gray-800"
              >
                {item.label}
              </Link>
            ) : (
              <span className="inline-flex min-h-10 items-center rounded-sm border border-gray-200 px-4 text-lg">
                {item.label}
              </span>
            )}

            {index < items.length - 1 && <span className="h-px w-4 bg-gray-200" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

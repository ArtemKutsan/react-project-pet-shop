// src/features/Contact/ContactItem.jsx
export default function ContactItem({ contact }) {
  return (
    <div className="rounded-xl bg-gray-100 p-8">
      <h6 className="mb-4 font-medium text-gray-400">{contact.title}</h6>

      {contact.type === 'phone' && (
        <a
          href={contact.href}
          className="text-2xl font-semibold transition-colors hover:text-blue-600 md:text-4xl"
        >
          {contact.value}
        </a>
      )}

      {contact.type === 'socials' && (
        <div className="flex gap-4">
          {contact.links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition-colors hover:text-blue-600"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      )}

      {contact.type === 'address' && (
        <address className="not-italic text-2xl font-semibold md:text-4xl">{contact.value}</address>
      )}

      {contact.type === 'text' && (
        <p className="text-2xl font-semibold md:text-4xl">{contact.value}</p>
      )}
    </div>
  );
}

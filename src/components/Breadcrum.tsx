import React from 'react';
import { Link } from 'react-router-dom';
export interface BreadcrumbIprops{
  links: Array<{ path: string; name: string }>;
}
const Breadcrumb = ({ links }:BreadcrumbIprops) => {
  return (
    <nav className='mb-10' aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {links.map((link, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== links.length - 1 ? (
              <>
                <Link
                  to={link.path}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  {link.name}
                </Link>
                <span className="mx-2 text-gray-500">/</span>
              </>
            ) : (
              <span className="text-gray-500">{link.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

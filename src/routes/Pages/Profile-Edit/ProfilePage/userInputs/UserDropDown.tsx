/** @format */

export default function UserDropDown() {
  const devFields = [
    "Artificial intelligence",
    "Machine Learning",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
    "Web Development",
    "DevOps",
    "Mobile Development",
    "Blockchian Technology",
  ];

  const devFieldOptions = devFields.map((field) => (
    <li
      key={field}
      className='px-2 py-1 cursor-pointer text-black hover:bg-hover'>
      {field}
    </li>
  ));

  return (
    <menu className='w-72 rounded-md bg-white border border-text absolute top-11 left-0 z-40 overflow-hidden'>
      {devFieldOptions}
    </menu>
  );
}

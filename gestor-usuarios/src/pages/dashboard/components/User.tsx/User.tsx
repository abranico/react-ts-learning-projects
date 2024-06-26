import useUsers from "../../../../hooks/useUsers";
import type { UserResult } from "../../../../types";
const User: React.FC<UserResult> = ({
  id,
  image,
  firstName,
  lastName,
  country,
}) => {
  const { handleRemoveUser } = useUsers();
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">
        <img src={image} alt="image" className="rounded" />
      </td>
      <td className="px-6 py-4 ">{firstName}</td>
      <td className="px-6 py-4">{lastName}</td>
      <td className="px-6 py-4">{country}</td>
      <td className="px-6 py-4">
        <button
          className="flex items-center"
          onClick={() => handleRemoveUser(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-trash"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default User;

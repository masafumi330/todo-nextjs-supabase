import Input from './Input';

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-center text-gray-800 p-4 bg-gray-300 rounded-lg shadow-lg">TODOアプリ</h1>
      <Input />
      <ul>
        <li>todo1</li>
        <li>todo2</li>
        <li>todo3</li>
        <li>todo4</li>
      </ul>
    </div>
  );
}

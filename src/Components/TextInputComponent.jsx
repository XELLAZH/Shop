export default function TextInputComponent(props) {
  return (
    <div className="flex justify-between items-center gap-5 pl-10 max-w-[70vw]">
      <p>{props.required ? `${props.label}*` : props.label}</p>
      {props.required ? (
        <input
          type="text"
          onChange={props.onChange}
          value={props.value}
          required
          placeholder={`${props.placeholder} *`}
          className="min-w-[50vw] border-2 border-red-700 rounded-md p-2"
        />
      ) : (
        <input
          type="text"
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          className="min-w-[50vw] border-2 border-gray-700 rounded-md p-2"
        />
      )}
    </div>
  );
}

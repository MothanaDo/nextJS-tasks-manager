export default function ShowTaskPage(props: any) {
  console.log("Hi", props);
  return (
    <main>
      <div>Show Task : {props.params.id}</div>
    </main>
  );
}

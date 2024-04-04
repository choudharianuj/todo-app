export default function TaskListItem({ children }: React.PropsWithChildren) {
  console.log('TaskListItem Rendered');

  return <li>{children}</li>;
}

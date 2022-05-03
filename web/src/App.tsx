interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return (
    <button
      className="
              bg-violet-600 
              px-5 
              h-10 
              rounded 
              text-violet-200 
              hover:bg-violet-800 
              transition-colors"
    >
      {props.text}
    </button>
  );
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Salvar" />
      <Button text="Editar" />
      <Button text="Fechar" />
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";

/**
 * Layout do menu.
 * 
 * @returns 
 */
function Layout(){
  return (
    <>
      <h1>Menu principal</h1>
      <nav>      
        <ul>
          <li>
            <Link to="/">
              Início
            </Link>
          </li>
          <li>
            <Link to="/opcao1">
              Opção 1
            </Link>
          </li>
          <li>
            <Link to="/opcao2">
              Opção 2
            </Link>
          </li>
          <li>
            <Link to="/opcao3">
              Opção 3
            </Link>
          </li>
        </ul>  
        <hr />      
      </nav>
      <Outlet />
    </>
  )
};

/**
 * Opção de página não encontrada.
 * 
 * @returns 
 */
function NoPage() {
  return (
      <div>
        <h2>404 - Página não encontrada</h2>
      </div>
    );
};

/**
 * Página inicial.
 * 
 * @returns 
 */
function Inicio(){
  return (        
      <div>
          <h2>Bem vindo!</h2>
      </div>
  );
}

/**
 * Opção 1 do menu.
 * 
 * @returns 
 */
function Opcao1(){
  return (
    <div>
        <h2>Opção 1</h2>
        <p>Você está no opção 1.</p>
     </div>
  );
}

/**
 * Opção 2 do menu.
 * 
 * @returns 
 */
function Opcao2(){
  return (
    <div>
        <h2>Opção 2</h2>
        <p>Você está no opção 2.</p>
     </div>
  );
}

/**
 * Opção 3 do menu.
 * 
 * @returns 
 */
function Opcao3(){
  return (
    <div>
        <h2>Opção 3</h2>
        <p>Você está na opção 3.</p>
     </div>
  );
}

/**
 * Principal componente da aplicação.
 * 
 * @returns 
 */
function MenuPrincipal() {
    return (      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Inicio />} />
                <Route path="opcao1" element={<Opcao1 />} />
                <Route path="opcao2" element={<Opcao2 />} />
                <Route path="opcao3" element={<Opcao3 />} />                            
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>        
      </BrowserRouter>    
    );
  }
  
  export default MenuPrincipal;
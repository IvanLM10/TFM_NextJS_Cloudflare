import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
}
// la interfaz "Props" define los dos parámetros que necesita el componente
const PageHead: React.FC<Props> = ({ title, description, keywords }) => {
    return (
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />} 
        {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      </Head>
    );
  };
  // Descripción para los motores de búsqueda
  export default PageHead;
  
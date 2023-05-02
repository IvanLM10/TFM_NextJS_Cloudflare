import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
}
// la interfaz "Props" define los parámetros que necesita el componente
const PageHead: React.FC<Props> = ({ title, description, keywords }) => {
    return (
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title>{title}</title>
        {description && <meta name="description" content={description} />} 
        {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      </Head>
    );
  };
  // Descripción para los motores de búsqueda
  export default PageHead;
  
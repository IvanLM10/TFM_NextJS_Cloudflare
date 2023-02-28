import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
}

const PageHead: React.FC<Props> = ({ title, description, keywords }) => {
    return (
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />} // Descripción para los motores de búsqueda
        {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      </Head>
    );
  };
  
  export default PageHead;
  
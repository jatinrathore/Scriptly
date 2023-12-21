import { CopyrightOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Link from 'antd/es/typography/Link';
import { FaSquareGithub } from 'react-icons/fa6';
import './css/GitFooter.css';

const GitFooter = () => {
  const { Text } = Typography;
  return (
    <div
      className="footer--container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CopyrightOutlined style={{ fontSize: '12px', color: '#8c8c8c' }} />
        <Text style={{ color: '#8c8c8c', marginLeft: '5px' }}>
          2023 Scriptly -
          <Link
            href={'https://github.com/jatinrathore'}
            style={{ color: '#8c8c8c', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            - @jatinrathore
          </Link>
        </Text>
      </div>
      <Link
        href="https://github.com/jatinrathore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareGithub size="30px" color="black" />
      </Link>
    </div>
  );
};

export default GitFooter;

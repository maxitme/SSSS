import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import { getCurrentUser } from "@src/lib/session"

const NavigatorComp = dynamic(() => import('@components/server/layout/navigator'), { ssr: true })

const { Header } = Layout;

const HeaderCom = async () => {
  return (
    <Header style={{ minHeight: 64, height: 64, width: '100%', border: '1px solid black' }}>
      <NavigatorComp></NavigatorComp>
    </Header>

  );
};

export default HeaderCom;
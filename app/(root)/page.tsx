import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async() => {
  const loggedIn = await getLoggedInUser();
  const getTimeBasedGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good Morning, ';
    } else if (currentHour < 18) {
      return 'Good Afternoon, ';
    } else {
      return 'Good Evening, ';
    }
  };

  const greetingMessage = getTimeBasedGreeting();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title={`${greetingMessage}`}
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />  

          <TotalBalanceBox 
            // accounts={accountsData}
            // totalBanks={accounts?.totalBanks}
            // totalCurrentBalance={accounts?.totalCurrentBalance}
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        {/* <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        /> */}
      </div>

      <RightSidebar 
        // user={loggedIn}
        // transactions={account?.transactions}
        // banks={accountsData?.slice(0, 2)}
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50 }]}
      />
    </section>
  )
}

export default Home
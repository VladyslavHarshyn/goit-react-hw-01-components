import Profile from "components/modules/User/User";
import { Statistics } from "components/modules/Statistics/Statistics";
import { Friendlist } from "components/modules/Friends/Friends-list";
import { TransactionHistory } from "components/modules/Transaction/Transactions";
import transactions from 'transactions.json';
import friends from 'friends.json';
import data from 'data.json';
import user from 'user.json';

export default function App() { 
  return (
      <div>
          <Profile
    userName={user.username}
    userTag={user.tag}
    userLocation={user.location}
    url={user.avatar}
    userFollowers={user.stats.followers}
    userViews={user.stats.views}
    userLikes={user.stats.likes}
          />
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
          <Friendlist friends={friends} />
          <TransactionHistory items={transactions} />
      </div>
  );
};

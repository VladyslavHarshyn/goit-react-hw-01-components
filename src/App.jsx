import Profile from 'components/User/User';
import { Statistics } from 'components/Statistics/Statistics';
import { Friendlist } from 'components/Friends/Friends-list';
import { TransactionHistory } from 'components/Transaction/Transactions';
import transactions from 'databases/transactions.json';
import friends from 'databases/friends.json';
import data from 'databases/data.json';
import user from 'databases/user.json';

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
      <Statistics title='Upload stats' stats={data} />
      <Statistics stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

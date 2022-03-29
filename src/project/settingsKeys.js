const settingsKeys = {
    Unfollow: {
        settingsArray: [
            { field : 'UnfollowMorePeople', slug: 'Unfollow Accounts' }, 
            { field : 'UnfollowLimitPerDay', slug: 'Unfollow Limit', desc: 'account per day' }, 
            { field : 'NotFollowedBackWithInHours', slug: 'Accounts Not Followed Back', preDesc: 'Wait', desc: 'hours before unfollowing' }, 
            { field : 'WaitHoursUntilReUnfollow', slug: 'Wait Time', desc: 'hours before re-unfollow' }
        ],
        table: 'AccountsRemoved',
        column: 'RemovedOn',
        columnFor: 'RemovedForUsername',
        last: 'Unfollowed People'
    },
    Follow: {
        settingsArray: [
            { field : 'FollowMorePeople', slug: 'Follow Accounts' }, 
            { field : 'FollowLimitPerDay', slug:'Follow Limit', desc: 'accounts per day'}
        ],
        table: 'AccountsFollowed',
        column: 'FollowedOn',
        columnFor: 'FollowedByUsername',
        last: 'Followed People'
    },
    Collect: {
        settingsArray: [
            { field : 'CollectMoreAccounts', slug: 'Collect Accounts' }, 
            { field : 'TakeAccountsWithHoursLessThan', slug: 'Collect Accounts On Images', preDesc: 'posted', desc: 'hours ago or less'},
            { field : 'CollectLimitPerDay', slug:'Collect Limit', desc: 'accounts per day'}
        ],
        table: 'AccountsTaken',
        column: 'TakenOn',
        columnFor: 'TakenForUsername',
        last: 'Collected Accounts'
    }
};

export default settingsKeys;
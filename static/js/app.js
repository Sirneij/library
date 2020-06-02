const app = new Vue({
  el: '#app',
  data: {
    people: [{
      "index": 0,
      "guid": "df42c288-57a7-4ab6-b427-c23ad2c2bde4",
      "isActive": true,
      "balance": 1728.81,
      "name": "Gertrude Hines",
      "email": "gertrudehines@orbin.com",
      "registered": "2019-02-19T04:26:53"
    },
      {
        "index": 1,
        "guid": "5b4e45f1-fc36-4979-bb6f-354126b3d495",
        "isActive": false,
        "balance": 3479.58,
        "name": "Lynch Foreman",
        "email": "lynchforeman@orbin.com",
        "registered": "2015-09-17T07:19:24"
      },
      {
        "index": 2,
        "guid": "fd43e7ad-0761-4f69-a0eb-deb89548aa73",
        "isActive": false,
        "balance": 3768.08,
        "name": "Grimes Holmes",
        "email": "grimesholmes@orbin.com",
        "registered": "2019-11-01T08:12:13"
      },
      {
        "index": 3,
        "guid": "d36beb28-f907-49df-acc4-733156cabf52",
        "isActive": false,
        "balance": 3641.87,
        "name": "Sherry Mendoza",
        "email": "sherrymendoza@orbin.com",
        "registered": "2014-08-26T09:32:43"
      },
      {
        "index": 4,
        "guid": "8bb59998-1101-4948-a9fb-08da148403eb",
        "isActive": true,
        "balance": 2201.42,
        "name": "Sims Hensley",
        "email": "simshensley@orbin.com",
        "registered": "2020-01-11T03:49:08"
      }],
    currency: '$',
    filterField: '',
    filterQuery: '',
    filterUserState: ''
  },
  methods: {
    activeStatus(person) {
      return (person.isActive) ? 'Active': 'Inactive';
    },
    activeClass(person) {
      return person.isActive ? 'active': 'inactive';
    },
    balanceClass(person) {
      let balanceLevel = 'success';
      if (person.balance < 2000) {
        balanceLevel = 'error';
      } else if (person.balance < 3000) {
        balanceLevel = 'warning';
      }
      let increasing = false,
      balance = person.balance / 1000;
      if (Math.round(balance) == Math.ceil(balance)) {
        increasing = 'increasing';
      }
      return [balanceLevel,
        increasing];
    },
    formatBalance(balance) {
      return this.currency + balance.toFixed(2);
    },
    formatDate(date) {
      let registered = new Date(date);
      return registered.toLocaleString('en-US');
    },
    filterRow(person) {
      let result = true;
      if (this.filterField) {
        if (this.filterField === 'isActive') {
          result = (typeof this.filterUserState === 'boolean') ?
          (this.filterUserState === person.isActive): true;
        } else {
          let query = this.filterQuery,
          field = person[this.filterField];
          if (typeof field === 'number') {
            query.replace(this.currency, '');
            try {
              result = eval(field + query);
            } catch(e) {}
          } else {
            field = field.toLowerCase();
            result = field.includes(query.toLowerCase());
          }
        }
      } return result;
    },
    isActiveFilterSelected() {
      return (this.filterField === 'isActive');
    }
  }
});

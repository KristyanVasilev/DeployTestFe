import { defineStore } from "pinia";
import axios from "axios";
import { useAlertStore } from "@/stores/alertStore.js";

export const useMatchDataStore = defineStore({
  id: "matchData",
  state: () => ({
    nextMatches: [],
    nextMatchesLoading: true,
    totalNextMatches: [],
    pastMatches: [],
    pastMatchesLoading: true,
    totalPastMatches: [],
    teams: [],
    teamsLoading:true,
    players: [],
    playersLoading:true,
    team:[],
    teamLoading:true,
    standings:[],
    standingsLoading: true,
    goalscorers: [],
    goalscorersLoading: true,
    totalGoalscorers: [],
    keepers: [],
    keepersLoading: true,
    totalKeepers: [],
  }),
  actions: {
    async fetchNextMatches(searchQuery, page = 1, perPage = 10) {
      const alertStore = useAlertStore();
      this.nextMatchesLoading = true;
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/seasons/next-matches`, {
          params: 
          { 
            Search: searchQuery,
            Page: page,
            PerPage: perPage
           },
          headers: { 'accept': 'text/plain' }
        });
        this.nextMatches = response.data.matches;
        this.totalNextMatches = response.data.totalNextMatches;
        this.nextMatchesLoading = false;
      } catch (error) {
        this.nextMatchesLoading = false;
        alertStore.error("Failed to fetch next matches");
      }
    },

    async fetchPastMatches(searchQuery, page = 1, perPage = 10) {
      const alertStore = useAlertStore();
      this.pastMatchesLoading = true;
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/seasons/past-matches`, {
          params: 
          { 
            Search: searchQuery,
            Page: page,
            PerPage: perPage
          },
          headers: { 'accept': 'text/plain' }
        });
        this.pastMatches = response.data.matches;
        this.totalPastMatches = response.data.totalPastMatches;
        this.pastMatchesLoading = false;
      } catch (error) {
        this.pastMatchesLoading = false;
        alertStore.error("Failed to fetch past matches");
      }
    },

    async fetchTeams(searchQuery) {
      const alertStore = useAlertStore();
      this.teamsLoading = true;
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/teams`, {
          params: { Search: searchQuery },
          headers: { 'accept': 'text/plain' }
        });
        this.teams = response.data;
        this.teamsLoading = false;
      } catch (error) {
        this.teamsLoading = false;
        alertStore.error("Failed to fetch teams");
      }
    },
    async fetchInfoForTeam(teamId) {
        const alertStore = useAlertStore();
        this.teamLoading = true;
        try {
          const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/teams/${teamId}`, {
            headers: { 'accept': 'text/plain' }
          });
          this.team = response.data;
          this.teamLoading = false;
        } catch (error) {
          this.teamLoading = false;
          alertStore.error("Failed to fetch info for the team");
        }
    },
    async fetchPlayersForTeam(teamId) {
      const alertStore = useAlertStore();
      this.playersLoading = true;
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/teams/${teamId}/players`, {
          headers: { 'accept': 'text/plain' }
        });
        this.players = response.data;
        this.playersLoading = false;
      } catch (error) {
        this.playersLoading = false;
        alertStore.error("Failed to fetch players for the team");
      }
    },
    async fetchSeasonStandings() {
        const alertStore = useAlertStore();
        this.standingsLoading = true;
        try {
          const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/seasons/standings`, {
            headers: { 'accept': 'text/plain' }
          });
          this.standings = response.data;
          this.standingsLoading = false;
        } catch (error) {
          this.standingsLoading = false;
          alertStore.error("Failed to fetch season standings");
        }
    },
    async fetchGoalScorers(searchQuery, page = 1, perPage = 10) {
      const alertStore = useAlertStore();
      this.goalscorersLoading = true;
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/seasons/goalscorers`, {
          params: 
          { 
            Search: searchQuery,
            Page: page,
            PerPage: perPage
          },
          headers: { 'accept': 'text/plain' }
        });
        this.goalscorers = response.data.topGoalScorers;
        this.totalGoalscorers = response.data.playersCount;
        this.goalscorersLoading = false;
      } catch (error) {
        this.goalscorersLoading = false;
        alertStore.error("Failed to fetch goalscorers");
      }
    },
    async fetchKeepers(searchQuery, page = 1, perPage = 10) {
      const alertStore = useAlertStore();
      this.keepersLoading = true;
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/seasons/topkeepers`, {
          params: 
          { 
            Search: searchQuery,
            Page: page,
            PerPage: perPage
          },
          headers: { 'accept': 'text/plain' }
        });
        this.keepers = response.data.topKeepers;
        this.totalKeepers = response.data.playersCount;
        this.keepersLoading = false;
      } catch (error) {
        this.keepersLoading = false;
        alertStore.error("Failed to fetch keepers");
      }
    },
  }
});

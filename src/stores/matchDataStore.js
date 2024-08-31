import { defineStore } from "pinia";
import axios from "axios";
import { useAlertStore } from "@/stores/alertStore.js";

export const useMatchDataStore = defineStore({
  id: "matchData",
  state: () => ({
    nextMatches: [],
    pastMatches: [],
    teams: [],
    players: [],
    team:[],
    standings:[]
  }),
  actions: {
    async fetchNextMatches(searchQuery) {
      const alertStore = useAlertStore();
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/seasons/next-matches`, {
          params: { Search: searchQuery },
          headers: { 'accept': 'text/plain' }
        });
        this.nextMatches = response.data;
      } catch (error) {
        alertStore.error("Failed to fetch next matches");
      }
    },

    async fetchPastMatches(searchQuery) {
      const alertStore = useAlertStore();
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/seasons/past-matches`, {
          params: { Search: searchQuery },
          headers: { 'accept': 'text/plain' }
        });
        this.pastMatches = response.data;
      } catch (error) {
        alertStore.error("Failed to fetch past matches");
      }
    },

    async fetchTeams(searchQuery) {
      const alertStore = useAlertStore();
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/teams`, {
          params: { Search: searchQuery },
          headers: { 'accept': 'text/plain' }
        });
        this.teams = response.data;
      } catch (error) {
        alertStore.error("Failed to fetch teams");
      }
    },
    async fetchInfoForTeam(teamId) {
        const alertStore = useAlertStore();
        try {
          const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/teams/${teamId}`, {
            headers: { 'accept': 'text/plain' }
          });
          this.team = response.data;
        } catch (error) {
          alertStore.error("Failed to fetch info for the team");
        }
    },
    async fetchPlayersForTeam(teamId) {
      const alertStore = useAlertStore();
      try {
        const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/teams/${teamId}/players`, {
          headers: { 'accept': 'text/plain' }
        });
        this.players = response.data;
      } catch (error) {
        alertStore.error("Failed to fetch players for the team");
      }
    },
    async fetchSeasonStandings() {
        const alertStore = useAlertStore();
        try {
          const response = await axios.get(`https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/seasons/standings`, {
            headers: { 'accept': 'text/plain' }
          });
          this.standings = response.data;
        } catch (error) {
          alertStore.error("Failed to fetch season standings");
        }
      },
  }
});

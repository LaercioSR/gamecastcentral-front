import { useParams } from "react-router-dom";
import { TeamPageContainer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { GameView } from "../../components/GameView";
import { IGame } from "../../interfaces/IGame";
import { GamesListContainer } from "../Home/styles";

export function Team() {
  const { name } = useParams();
  const [games, setGames] = useState<IGame[]>([]);
  const [teamName, setTeamName] = useState<string>("");

  useEffect(() => {
    api
      .get(`teams/${name}`)
      .then((response) => {
        setGames(response.data.games);
        setTeamName(response.data.name);
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 404) {
          window.location.href = "/404";
          return;
        }
      });
  }, [name]);

  return (
    <TeamPageContainer>
      <h1>{teamName}</h1>

      {games.length > 0 ? <GameView {...games[0]} /> : ""}
      {games.length > 1 ? (
        <>
          <h2>Próximos jogos</h2>
          <GamesListContainer>
            {games.slice(1, games.length).map((game) => (
              <GameView {...game} key={game.id} />
            ))}
          </GamesListContainer>
        </>
      ) : (
        ""
      )}
    </TeamPageContainer>
  );
}

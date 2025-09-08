import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>20/09/2025</td>
                        </tr>
                        <tr>
                            <td>Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 59,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2025</td>
                        </tr>
                        <tr>
                            <td>Aluguel do apartamento</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 1.200,00
                                </PriceHighlight>
                            </td>
                            <td>Casa</td>
                            <td>27/03/2025</td>
                        </tr>

                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 8.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/03/2025</td>
                        </tr>
                        
                        <tr>
                            <td>Salário</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 5.400,00
                                </PriceHighlight>
                            </td>
                            <td>Salário</td>
                            <td>05/09/2025</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}
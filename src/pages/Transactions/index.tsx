import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { TransactionsContainer, TransactionsTable } from "./styles";
import { priceFormatter } from "../../utils/Formatter";
import { useContextSelector } from "use-context-selector";
import { Trash } from "phosphor-react";



export function Transactions() {

    async function handleDelete(id: number) {
        if (confirm("Deseja realmente excluir esta transação?")) {
            await deleteTransaction(id);
        }
    }

    const transactions = useContextSelector(
        TransactionsContext,
        (context) => context.transactions
    );
    const deleteTransaction = useContextSelector(
        TransactionsContext,
        (context) => context.deleteTransaction
    );


    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td className={transaction.type}>
                                    {transaction.type === "outcome" && "- "}
                                    {priceFormatter.format(transaction.price)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(transaction.id)}
                                        style={{
                                            background: "transparent",
                                            border: "none",
                                            cursor: "pointer",
                                        }}
                                        title="Excluir transação"
                                    >
                                        <Trash size={20} color="#ef4444" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}
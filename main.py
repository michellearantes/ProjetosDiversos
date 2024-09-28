from datetime import datetime

def obter_menu_do_dia(dia_da_semana):
    menus = {
        "segunda": "Bolos grandes: Chocolate, ninho com nutela, abacaxi e fubá. Bolos de pote: chocolate com mousse de chocolate",
        "terça": "Bolos grandes: Chocolate, fubá, laranja. Bolos de pote: Chocolate com mousse de morango",
        "quarta": "Bolos grandes: Chocolate, fubá, laranja. Bolos de pote: Chocolate com mousse de maracujá",
        "quinta": "Bolos grandes: Chocolate, fubá, laranja. Bolos de pote: Limão",
        "sexta": "Bolos grandes: Chocolate, fubá, laranja. Bolos de pote: Bem casado",
        "sábado": "Bolos grandes: Chocolate, fubá, laranja. Bolos de pote: Banoffe",
        "domingo": "Desculpe, não atendemos aos domingos"
    }
    return menus.get(dia_da_semana.lower())

def chatbot():
    print("Olá! Eu sou o chatbot do restaurante. Como posso ajudá-lo?")

    while True:
        pergunta = input("Você: ").strip().lower()

        if "menu" in pergunta or "opções" in pergunta or "sabores":
            # Obtém a data atual
            data_atual = datetime.now()

            # Obtém o dia da semana (0=segunda, 1=terça, ..., 6=domingo)
            dia_da_semana = data_atual.weekday()

            # Lista com os dias da semana
            dias = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo']

            resposta = obter_menu_do_dia(dias[dia_da_semana])
            print(f"Chatbot: O menu do dia é: {resposta}")

        elif "horas" in pergunta or "horário" in pergunta or "aberto":
            print("Ficaremos abertos das 09h às 19h.")

        elif "pix" in pergunta or "forma de pagamento" in pergunta or "cartão" in pergunta:
            print("Aceitamos cartão de débito e crédito, vale restaurante e Pix.")

        elif "encomenda" in pergunta or "pedido" in pergunta:
            print("Para fazer uma encomenda, por favor, insira as informações abaixo:\n Sabor: \nTamanho: \nPrevisão de retirada: \nForma de pagamento: \nNome do responsável pela retirada:")

        elif "sair" in pergunta or "obrigado" in pergunta:
            print("Chatbot: Obrigado por falar conosco! Até logo!")
            break

        else:
            print("Chatbot: Desculpe, não entendi a sua pergunta.")

if __name__ == "__main__":
    chatbot()

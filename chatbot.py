from datetime import datetime

def obter_menu_do_dia(dia_da_semana):
    menus = {
        "segunda":"Bolos grandes: Chocolate, ninho com nutela, abacaxi e fubá. \n Bolos de pote: chocolate com mousse de chocolate",
        "terça": "Bolos grandes: Chocolate, fubá, laranja. \n Bolos de pote: Chocolate com mousse de morango",
        "quarta": "Bolos grandes: Chocolate, fubá, laranja. \n Bolos de pote: Chocolate com mousse de maracujá",
        "quinta": "Bolos grandes: Chocolate, fubá, laranja. \n Bolos de pote: Limão",
        "sexta": "Bolos grandes: Chocolate, fubá, laranja. \n Bolos de pote: Bem casado",
        "sábado": "Bolos grandes: Chocolate, fubá, laranja. \n Bolos de pote: Banoffe",
        "domingo": "Desculpe, não atendemos aos domingos"
    }
    return menus.get(dia_da_semana.lower())

def chatbot():
    print("Olá! Seja bem-vindo ao nosso chatbot! Como posso ajudar você?")
    while True:
        pergunta = input("Você: ").strip().lower()

        if 'horário' in pergunta or 'horario' in pergunta or 'horas' in pergunta or 'hora' in pergunta:
            print("Tia Cida: Nosso horário de atendimento é das 09 às 18.")
        elif 'pix' in pergunta or 'cartão' in pergunta or 'cartões' in pergunta or 'cartao' in pergunta or 'cartoes' in pergunta:
            print("Tia Cida: Aqui na loja aceitamos pix e cartões de crédito e débito.")
        elif 'menu' in pergunta or 'sabores' in pergunta or 'sabor' in pergunta:
            # Obtém a data atual
            data_atual = datetime.now()

            # Obtém o dia da semana (0=segunda, 1=terça, ..., 6=domingo)
            dia_da_semana = data_atual.weekday()

            # Lista com os dias da semana
            dias = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo']

            resposta = obter_menu_do_dia(dias[dia_da_semana])
            print(f"Tia Cida: As opções de hoje são: \n {resposta}")
        
        elif 'sair' in pergunta:
            print("Tia Cida: Obrigado por usar o nosso serviço! Até logo!")
            break
        else:
            resposta = "Desculpe, não entendi sua pergunta."

        

if __name__ == "__main__":
    chatbot()

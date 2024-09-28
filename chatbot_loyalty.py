def chatbot():
    print("Olá! Seja bem-vindo ao nosso chatbot! Como posso ajudar você?")
    while True:
      pergunta = input("Você: ").strip().lower()

      if 'trocar' in pergunta and 'senha' in pergunta:
            print("Para trocar sua senha, acesse a opção 'Perfil' no menu lateral")
      elif 'como' in pergunta and 'resgatar' in pergunta or 'trocar' in pergunta and 'pontos' in pergunta:
            print("Você pode resgatar seus pontos acessando a opção 'Troque seus pontos' no menu superior.\nSiga os seguintes passos: \n1. Coloque o(s) produto(s) desejado(s) no carrinho\n2.Confirme ou altere o endereço desejado para entrega\n3.Confirme os dados e finalize o pedido")
      elif 'consultar' in pergunta and 'pontos' in pergunta or 'extrato' in pergunta:
            print("Você pode consultar seu extrato de pontos acessando a opção 'Extrato de Pontos' no menu superior")
      elif 'prazo' in pergunta and 'entrega' in pergunta:
            print("O prazo de entrega varia de acordo com a loja selecionada. Verifique o prazo no detalhamento do produto")
      elif 'ganhar' in pergunta and 'pontos' in pergunta:
            print("Você pode ganhar pontos informando seu CPF no ato da compra.")
      elif  'produto' in pergunta and 'quebrado' in pergunta or 'defeito' in pergunta:
            print("Se você recebeu um produto quebrado ou com defeito, entre em contato com nosso atendimento ao cliente.")
      elif  'trocar' in pergunta and 'produto' in pergunta:
            print("Para trocar seu produto, entre em contato com nosso atendimento ao cliente.")
      elif 'cancelar' in pergunta and 'pedido' in pergunta:
            print("Para cancelar seu pedido, entre em contato com nosso atendimento ao cliente.")
      elif 'não' in pergunta and 'recebi' in pergunta and 'pontos' in pergunta:
            print("Seus pontos serão contabilizados até 10 dias após a compra. Caso o prazo já tenha passado, entre em contato com nosso atendimento ao cliente.")
      elif pergunta == 'sair':
        print("Obrigado por usar o nosso serviço! Até logo!")
        break
      else:
        print("Desculpe, não entendi sua pergunta.")


if __name__ == "__main__":
    chatbot()

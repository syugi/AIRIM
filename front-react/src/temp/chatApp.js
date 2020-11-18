const chatLists =  [
    {
        id: 1,
        name: "Hurin Omar",
        online: false,
        message: "Lorem ipsum dolor sit amet...",
        messageLists: [
            {
                id: 1,
                type: "Recipient",
                message: "We invite you at our office for visit"
            },
            {
                id: 2,
                type: "Own",
                message: "It's like dream come true, thank you so much"
            },
            {
                id: 3,
                type: "Recipient",
                message: "Welcome"
            },
            {
                id: 4,
                type: "Recipient",
                message: "No Problem"
            },
            {
                id: 5,
                type: "Own",
                message: "Yaaaass!!"
            },
        ]
    },
    {
        id: 2,
        online: true,
        name: "Victor Erixon",
        message: "Lorem ipsum dolor sit amet...",
        messageLists: [
            {
                id: 1,
                type: "Recipient",
                message: "We invite you at our office for visit"
            },
            {
                id: 2,
                type: "Own",
                message: "It's like dream come true, thank you so much"
            },
            {
                id: 3,
                type: "Recipient",
                message: "Welcome"
            },
            {
                id: 4,
                type: "Recipient",
                message: "No Problem"
            },
            {
                id: 5,
                type: "Own",
                message: "Yaaaass!!"
            },
            {
                id: 6,
                type: "Recipient",
                message: "It's too early to celebrate though..."
            },
			  {
				  id: 7,
				  type: "Own",
				  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			  }
        ]
    },
    {
        id: 3,
        online: false,
        name: "Hali",
        message: "Lorem ipsum dolor sit amet...",
        messageLists: []
    },
    {
        id: 4,
        online: true,
        name: "Arastu Zakia",
        message: "Lorem ipsum dolor sit amet...",
        messageLists: []
    },
    {
        id: 5,
        online: false,
        name: "Sufiya",
        message: "Lorem ipsum dolor sit amet...",
        messageLists: []
    },
];

class App extends React.Component {
  
  constructor(props) {
        super(props);

        this.chatMessageListRef = React.createRef();
    }

    state = {
        chatLists: chatLists,
        chatMessageLists: chatLists[0].messageLists,
        txtValue: "",
        txtSearchValue: ""
    }


    simulateSearch() {
        //TODO: simulate search here...
        const searchTerm = "Arastu";
        let counter = 0;

        const interval = setInterval(() => {
            const result = searchTerm.substr(0, counter);
            this.onSearch(result);
            counter += 1;

            if (counter > searchTerm.length) {
                clearInterval(interval);

                const reverseSearchInterval = setInterval(() => {
                    const result = searchTerm.substr(0, counter);
                    this.onSearch(result);
                    counter -= 1;

                    if (counter < 0) {
                        clearInterval(reverseSearchInterval);
                    }
                    
                }, 100);
            }


            
        }, 100);
    }

    simulateChat() {
        const { chatMessageLists } = this.state;

        setTimeout(() => {
            this.setState({
                chatMessageLists: chatMessageLists.concat([
                    {
                        id: 9,
                        type: "Recipient",
                        message: "Okay..."
                    }
                ])
            }, () => {

                this.chatMessageListRef.current.scrollBy(0, 500);

                setTimeout(() => {

                    this.setState({
                        chatMessageLists: this.state.chatMessageLists.concat([
                            {
                                id: 10,
                                type: "Own",
                                message: "Thanks again!"
                            }
                        ])
                    }, () => {
                        this.chatMessageListRef.current.scrollBy(0, 500);
                    });

                    setTimeout(() => {
                        this.setState({
                            chatMessageLists: this.state.chatMessageLists.concat([
                                {
                                    id: 11,
                                    type: "Recipient",
                                    message: "Your welcome!"
                                }
                            ])
                        }, () => {
                            this.chatMessageListRef.current.scrollBy(0, 500);
                        });
                            
                    }, 1000);

                }, 1000);
            });

            

        }, 1000);
    }


    componentDidMount() {

		this.simulateChat();
		 
		 setTimeout(() => {
			 this.simulateSearch();
		  }, 2000);
    }

    onSearch = (val) => {
        const results = val.length > 0 ?
            chatLists.filter(
                x => x.name.toLowerCase().includes(val.toLowerCase())
            ) :
            chatLists;

        this.setState({ txtSearchValue: val, chatLists: results });
    }

    onAddMessage = (e) => {
        e.preventDefault();
        const { txtValue, chatMessageLists } = this.state;

        if (txtValue) {
            const id = chatMessageLists[chatMessageLists.length - 1].id + 1;
            const newMessage = {
                id,
                message: txtValue,
                type: "Own"
            };

            this.setState({
                chatMessageLists: chatMessageLists.concat([newMessage]),
                txtValue: ""
            },
                () => this.chatMessageListRef.current.scrollBy(0, 500)
            );
        }
    }

    onLoadChatMessages = (messageLists) => {

        this.setState({
            chatMessageLists: []
        });

        setTimeout(() => {
            this.setState({
                chatMessageLists: messageLists
            });
        }, 100);
    }


  
      render() {

        const chats = this.state.chatLists.map(x =>
            <div 
                className="chat row" 
                key={x.id} 
                onClick={() => this.onLoadChatMessages(x.messageLists)}
            >
                <div className="col-md-2" style={{ position: "relative" }}>
                    {x.online ? <div className="profile-status"></div> : ""}
                    <img src="https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                </div>
                <div className="col-md-6">
                    <h3 className="chat-header">{x.name}</h3>
                    <div className="chat-details">
                        {x.message}
                    </div>
                </div>
                <div className="col-md-4 chat-other-details">
                    <ul>
                        <li className="chat-details">02 Feb</li>
                        <li style={{ float: "right" }}>
                            <div className="chat-notification">5</div>
                        </li>
                    </ul>
                </div>
            </div>
        );

        const ChatMessageRecipient = ({ message }) => {
            return (
                <>
                    <div className="col-md-1">
                        <div className="row">
                            <div className="col-md-12">
                                <img src="https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 chat-time" style={{ textAlign: "center" }}>
                                10:00
                            </div>
                        </div>
                    </div>

                    <div className="col-md-11">
                        <div className="message-recipient">
                            {message}
                        </div>
                    </div>
                </>
            );
        }

        const ChatMessageOwner = ({ message, idx }) => {
            return (
                <div className="col-md-12">
                    <div style={{ float: "right" }}>
                        <div className="message-owner">
                            {message}
                        </div>
                    </div>
                </div>
            );
        }

        const chatMessageLists = this.state.chatMessageLists.map((x, idx) =>
            <div key={x.id} className="row message-details">
                    {
                        x.type === "Own" ? 
                            <ChatMessageOwner idx={idx} message={x.message} /> : <ChatMessageRecipient message={x.message} />
                    }
            </div>
        );

        return (
            <>
                <div className="wrapper">

                    <div className="content-wrapper">

                        <div className="row">
                            <div className="col-md-5 chat-lists-panel">
                                <div className="chat-search-base">
                                    <div className="col-md-12">
                                        <div className="row chat-search">
                                            <div className="col-md-1">
                                                <i className="fas fa-search"></i>
                                            </div>
                                            <div className="col-md-11">
                                                <input
                                                    type="text"
                                                    placeholder="Search"
                                                    className="input-search"
                                                    onChange={(e) => this.onSearch(e.target.value)}
                                                    value={this.state.txtSearchValue}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div className="col-md-12 chat-lists scroll">
                                    {chats}
                                </div>
                            </div>


                            <div
                                className="col-md-7 chat-message-list-panel"
                                style={{ paddingRight: "0 !important" }}
                            >
                                <h2>Gold Coast</h2>
                                <span>From: Sonny</span>
                                <hr />

                                <div
                                    className="scroll chat-message-list-panel-details"
                                    style={{ paddingRight: "1em" }}
                                    ref={this.chatMessageListRef}
                                >
                                    <br />
                                    {chatMessageLists}
                                </div>

                                <form onSubmit={this.onAddMessage}>
                                    <div className="row message-textbox-layout">
                                        <div
                                            className="col-md-1"
                                            style={{ textAlign: "center", color: "#a3adbe" }}
                                        >
                                            <i className="far fa-smile fa-2x"></i>
                                        </div>
                                        <div className="col-md-10 message-panel">
                                            <input
                                                type="text"
                                                placeholder="Type a message..."
                                                onChange={(e) =>
                                                    this.setState({
                                                        txtValue: e.target.value
                                                    })
                                                }
                                                value={this.state.txtValue}
                                            />
                                        </div>
                                        <div className="col-md-1" style={{ textAlign: "right" }}>
                                            <button className="btn-send-message">
                                                <i className="far fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

  
}

ReactDOM.render(<App />, document.querySelector("#root"));
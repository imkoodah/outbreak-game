export default function ParkourSystem() {
    return (
        <main className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Introduction</h1>
            <p className="text-xl mb-10">
                In this page, I will be thoroughly describing a parkour system that will be implemented into the game.
                Throughout this page, I will explain the requirements, the scope, the architecture, the different types of tests, and optimisations.
            </p>

            <h2 className="text-4xl font-bold mb-6">Requirements</h2>
            <p className="text-xl mb-5">
                First off, we will need to design basic core movements. These include sprinting and climbing. Advanced parkour will be a subsystem.
            </p>
            <p className="text-xl mb-5">
                For sprinting, we can utilise the shift key. The idea is for the player to be locked into either first person, or third person shift locked.
                For climbing, we will use a RayCast from the HumanoidRootPart or the Torso. A distance of 2 - 3 studs will suffice.
                This will be activated through pressing space again while in the air.
            </p>
            <p className="text-xl mb-5">
                A crouch mechanic would be excellent too, as there will be tight spaces that can only be squeeze through when your character is low enough.
                To build off this, if a player chooses to hide rather than run, that is also a viable option.
            </p>
            <p className="text-xl mb-10">
                There will be no stamina, the game is a test of your knowledge on the parkour mechanics.
            </p>

            <h2 className="text-4xl font-bold mb-6">Scope</h2>
            <p className="text-xl mb-5">
                To script this and ensure security from exploits, we will utilise RemoteEvents. A client will initiate an input and send this to the
                server. The server verifies this and responds with an &#34;ok&#34; to allow the client to go ahead with their input.
            </p>
            <p className="text-xl mb-5">
                The main problem with this is latency. The game is designed for scalability and optimised performance. Players should have instantaneous
                inputs without the server having to respond.
            </p>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </main>
    )
}


export default function Notification() {
    const show = false;

    if(!show) {
        return null;
    }

    return (
<div>
    <strong>Attention</strong> Vous êtes dans l'environnement de développement
</div>
    );
}
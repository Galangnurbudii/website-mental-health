import React from 'react'
import Badge from './Badge'

function OtherArticle({ article }) {
    return (
        <div className="flex items-center">
            <img
                src={article.thumbnail_url}
                alt="Pasangan Supportif Dapat Cegah Depresi"
                style={{
                    maxWidth: '160px',
                    maxHeight: '160px',
                }}
            />
            <div className="pl-6 ">
                <p className="text-hitam line-clamp-2 mb-2">{article.judul}</p>
                <Badge titleBadge={article.tag} />
            </div>
        </div>
    )
}

export default OtherArticle
